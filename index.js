// onmd-sic module exports
//

var onm = require('onm');
var uuid = requrie('node-uuid');

module.exports = {

    dependencies: {
        onm: onm,
        uuid: uuid
    }, // module.exports.dependencies


    onmDataModelDeclaration: {

        namespaceType: "root",
        jsonTag: "SiCImage",
        ____label: "SiC Image Document",
        ____description: "Encapsule Project System in Cloud (SiC) compiled program specification image.",
        ____docModel: "3e2810a0-4ea5-11e4-b137-080027d17300"
        namespaceProperties: {
            userImmutable: {
                docUuid: {
                    fnCreate: function() { uuid.v4(); }
                },
                docModel: {
                    defaultValue: "3e2810a0-4ea5-11e4-b137-080027d17300"
                },
                revision: {
                    defaultValue: 0
                },
                createTime: {
                    fnCreate: function() { onm.util.getEpochTime(); }
                },
                revisionTime: {
                    defaultValue: ''
                },
                revisionUuid: {
                    defaultValue: 
                }

            }
        },
        semanticBindings: {
            componentKeyGenerator: "internalUuid",
            namespaceVersioning: "internalAdvanced"
        }

    } // module.exports.onmDataModelDeclaration


};

