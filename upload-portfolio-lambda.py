import boto3
import StringIO
import zipfile
import mimetypes

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:693833859909:deployPortfolioTopic2')

    try:
        s3 = boto3.resource('s3')

        portfolio_bucket = s3.Bucket('portfolio.guru.danielstrolle.me')
        build_bucket = s3.Bucket('portfoliobuid.guru.danielstrolle.me')

        portfolio_zip = StringIO.StringIO()
        build_bucket.download_fileobj('portfoliobuild.zip', portfolio_zip)

        with zipfile.ZipFile(portfolio_zip) as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm)
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

            print "job done"
            topic.publish(Subject='Portfolio Deployment', Message='Portfolio deployed successfully!')
    except:
        topic.publish(Subject='Portfolio Deployment', message='Portfolio deployment failed!')
        raise

        return 'Hello from Lambda'
