# Updating a DynamoDB attribute with a hyphen or dash (-) in the name using CLI or SDK

As a part of my personal growth plan and work commitments, I am working on the [**AWS Certified Developer - Associate**](https://aws.amazon.com/certification/certified-developer-associate/ "AWS CDA") certification using the [Linux Academy](https://www.linuxacademy.com/ "LA") platform. In one of the lab exercises that I was doing on DynamoDB, there were requirements to perform [*conditional updates*](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ConditionExpressions.html "Condition Expressions") and *atomic counters* on the tables. Being what I am, I did not use the examples they had provided, but created by own table to create a database of books I own and proceeded to create my own attribute names for the items.

As it happened, I created attributes like *book-title*, *book-author*, *book-price*, etc. which in itself is not a problem. However, the lab exercise had me perform the item updates using the [**BOTO3**](https://aws.amazon.com/sdk-for-python/ "BOTO3") [*Python*](https://www.pythong.org "Python") SDK which got me excited to learn new things. I used the example files that the trainer had provided and modified it to suit my environment and ran the script. 

    UpdateExpression='SET book-price = :val',
    ExpressionAttributeValues={
        ':val': {'N': '15.37'},  
        ':currval': {'N': '0'} 
    },
    ConditionExpression='book-price = :currval',
    ReturnValues="ALL_NEW"


To my dismay, I started encountering errors.

    Traceback (most recent call last):
      File "conditional_write.py", line 18, in <module>
        ReturnValues="ALL_NEW"
      File "/usr/local/lib/python3.7/site-packages/botocore/client.py", line 316, in _api_call
        return self._make_api_call(operation_name, kwargs)
      File "/usr/local/lib/python3.7/site-packages/botocore/client.py", line 626, in _make_api_call
        raise error_class(parsed_response, operation_name)
    botocore.exceptions.ClientError: An error occurred (ValidationException) when calling the UpdateItem operation: Invalid UpdateExpression: Syntax error; token: "-", near: "book-price"

I reviewed my code to ensure that I had not introduced any bugs myself. After ensuring that I had not introduced any bugs by adding new attributes to an item without any dashes and running the script successfully, I starting practicing my Google-Fu. There I found [this](https://stackoverflow.com/questions/39348520/updating-an-attribute-in-dynamodb-that-contains-hyphen-or-dash-in-javascript) awesome post on stackoverflow along with a link to official [AWS](https://aws.amazon.com "AWS") [documentation](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Expressions.ExpressionAttributeNames.html). The official documentation however only talks about a dot being a special character and it doesn't list a dash (-). After following the instructions from the stackoverflow post, my new code looked like this:


    UpdateExpression='SET #bp = :val',
    ExpressionAttributeValues={
        ':val': {'N': '15.37'},  # Make sure we keep this line the same
        ':currval': {'N': '0'}  # What was the current value?
    },
    ExpressionAttributeNames={
        "#bp": "book-price"
        },
    ConditionExpression='#bp = :currval',
    ReturnValues="ALL_NEW"

And once I implemented this code it all started working correctly. I have left a feedback for the [AWS](https://aws.amazon.com "AWS") documentation team and hopefully they will update the documentation. I just want to make sure that all the cases are at listed and documented so that developers and wannabes like me are not stuck.
