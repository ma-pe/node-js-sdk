"use strict";

function uploadPicture(
    identityToken,
    provider,
    { description, url },
    callback
) {
    // var postParams = {};
    // postParams.providers = providers;
    //postParams.parts = parts;
    this.api.post(
        "push/identities/@token/" + provider + "/picture",
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

function publishPost(
    identityToken,
    provider,
    { message, attachments },
    callback
) {
    // var postParams = {};
    // postParams.providers = providers;
    //postParams.parts = parts;
    this.api.post(
        "push/identities/@token/" + provider + "/post",
        identityToken,
        {
            push: {
                post: {
                    message,
                    attachments
                }
            }
        },
        function(error, result) {
            this.api.retrieveData(error, result, "message", callback);
        }.bind(this)
    );
}

module.exports.uploadPicture = uploadPicture;
module.exports.publishPost = publishPost;
