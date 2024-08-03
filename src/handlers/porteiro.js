const AWS = require('aws-sdk');

AWS.config.update({ region: 'us-east-1' });

const ec2 = new AWS.EC2({ apiVersion: "2016-11-15" });

const params = {
    InstanceIds: ["i-0a8a85f87c265ec8c"]
};

exports.startEC2Instances = () => {
    return ec2.startInstances(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else console.log(">>> Porteiro ligado com sucesso!!! <<<");
    });
};

exports.stopEC2Instances = () => {
    return ec2.stopInstances(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else console.log(">>> Porteiro desligado com sucesso!!! <<<");
    });
};
