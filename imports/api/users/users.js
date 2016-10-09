userSchemas.User = new SimpleSchema({
    admin:{
        type:Boolean,
        optional:true,
        autoform:{
            type:"hidden"
        }
    },
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    email: {
        type:String,
        regEx: SimpleSchema.RegEx.Email,
        optional:true
    },
    emails: {
        type: Array,
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    createdAt: {
        type: Date,
        optional:true
    },
    profile: {
        type: userSchemas.UserProfile,
        optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    // roles: {
    //  type: Object,
    //    optional: true,
    //    blackbox: true
    // },
    // Option 2: [String] type
    // If you are sure you will never need to use role groups, then
    // you can specify [String] as the type
    roles: {
        type: [String],
        optional: true
    },
    picture: {
        type: String,
            optional:true,
            autoform: {
            afFieldInput: {
                type: 'fileUpload',
                    collection: 'Images',
                    label: 'Choose file'
            }
        }
    },
    status:{
        type:String,
        optional:true,
        autoform: { type: "hidden",label:false,omit:true }
    },
    // password: {
    //     type: String,
    //     label:"password",
    //     optional: true,
    //     autoform: {
    //         afFieldInput: {
    //             type: "password"
    //         }
    //     }
    // },
    // passwordConfirmation: {
    //     optional:true,
    //     label:"confirm password",
    //     autoform: {
    //         afFieldInput: {
    //             type: "password"
    //         }
    //     },
    //     type: String,
    //     min: 6,
    //     label: "Password confirmation",
    //     custom: function() {
    //         if (this.value !== this.field('password').value) {
    //             return "passwordMissmatch";
    //         }
    //     }
    // }
});
