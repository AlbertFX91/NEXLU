Template.publication.helpers({
    tagged_pretty: function(){
        return Prettify.compactTags(this.playersTagged);
    },
    isMine: function() {
        console.log(this);
        if (this.owner[0].id.trim() === Meteor.userId().trim())
            return true;
        return false;
    },
    iLike: function() {
        return _.contains(this.playersLike, Meteor.userId().trim());
    },
    iDislike: function() {
        return _.contains(this.playersDislike, Meteor.userId().trim());
    },



    // TODO: Esto hay que hacerlo en el lado del server (methods):
    listLikes: function(likes){
        var likes_username = _.map(likes, function(id){
            var user = Meteor.users.findOne(id, {fields:{username:1}});
            return user.username;
        } )
        return likes_username; // lista con los usernames de los usuarios que le dieron like.
    },
    listDislikes: function(dislikes){
        var dislikes_username = _.map(dislikes, function(id){
            var user = Meteor.users.findOne(id, {fields:{username:1}});
            return user.username;
        } )
        return dislikes_username; // lista con los usernames de los usuarios que le dieron dislikes.
    }
});

Template.publication.events({
    'click #edit-pub': function () {
        $('#edit-pub-modal').openModal({complete:function(){
            document.getElementById('edit-post-error').innerHTML = "";
        }})
        var textarea = document.getElementById('editPublication');
        textarea.value = this.description;
        $("#editPublication").trigger('autoresize');
        $("#edit-post-label").addClass("active");
    },
    'click #remove-pub': function () {
        $('#remove-pub-modal').openModal();
    }
    ,
    'submit .edit-post': function(e) {
        e.preventDefault();
        var description = document.getElementById('editPublication').value;
        var publicationId = this._id;
        var valido = true;
        if (description.trim() == ""){
            var texto = TAPi18n.__("error.post-notBlank");
            document.getElementById('edit-post-error').innerHTML = texto;
            $("#edit-post-label").removeClass("active");
            valido = false;
        } else if (description.length > 5000) {
            var texto = TAPi18n.__("error.post-maxlength");
            document.getElementById('edit-post-error').innerHTML = texto;
            $("#edit-post-label").hide();
            valido = false;
        }
        //Comprobación del etiquetado con '@'
        var usernamesTagged = Util.validateTag(description);
        if (valido) {
           Meteor.call('editPublication', publicationId, description, usernamesTagged, function(err, response){
               if (!err){
                   $('#edit-pub-modal').closeModal();
               }
           });
        }
    },
    'click #editPublication': function(e) {
        e.preventDefault();
        document.getElementById('edit-post-error').innerHTML = "";
        $("#edit-post-label").show();
    },
    'submit .remove-post': function(e) {
        e.preventDefault();
        var publicationId = this._id;
        Meteor.call('removePublication', publicationId, function(err, response){
            if (!err){
                $('#remove-pub-modal').closeModal();
                $('.lean-overlay').remove();
            }
        });
    },
    'click #like': function (e) {
        e.preventDefault();
        var publicationId = this._id;
        if (!_.contains(this.playersLike, Meteor.userId())){
            Meteor.call('likePublication', publicationId, function(err, response){
                if(err){
                    console.log(err);
                }
            });
        }
    },
    'click #dislike': function (e) {
        e.preventDefault();
        var publicationId = this._id;
        if (!_.contains(this.playersDislike, Meteor.userId())){
            Meteor.call('dislikePublication', publicationId, function(err, response){
                if(err){
                    console.log(err);
                }
            });
        }
    },
    'click #i-like': function (e) {
        e.preventDefault();
        var publicationId = this._id;
        if (_.contains(this.playersLike, Meteor.userId())){
            Meteor.call('removeLikePublication', publicationId, function(err, response){
                if(err){
                    console.log(err);
                }
            });
        }
    },
    'click #i-dislike': function (e) {
        e.preventDefault();
        var publicationId = this._id;
        if (_.contains(this.playersDislike, Meteor.userId())){
            Meteor.call('removeDislikePublication', publicationId, function(err, response){
                if(err){
                    console.log(err);
                }
            });
        }
    }
});