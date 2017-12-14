"use strict";

function uploadPicture(
    identityToken,
    providers,
    { description, url },
    callback
) {
    var postParams = {};
    postParams.providers = providers;
    postParams.parts = parts;
    this.api.post(
        "push/identities/@token/twitter/picture",
        identityToken,
        {
            push: {
                picture: {
                    description,
                    url
                }
            }
        },
        function(error, result) {
            this.api.retrieveData(error, result, "message", callback);
        }.bind(this)
    );
}

module.exports.uploadPicture = uploadPicture;
