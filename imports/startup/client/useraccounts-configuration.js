import { Accounts } from 'meteor/accounts-base';

AccountsTemplates.configure({
    // Behavior
    confirmPassword: true,
    enablePasswordChange: true,
    forbidClientAccountCreation: false,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: false,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: false,
    negativeFeedback: false,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
    onLogoutHook: function() {
      console.log("We like you!");
      console.log("See you soon!");
      // Session.clear("userCart");
    },
    /*----------*/
    onSubmitHook: function(error, state) {
      if(state && Meteor.userId()) {
        const userCart = Session.get("userCart");
        if(userCart && userCart.items) {
          // TODO: Merge anonymous cart with user Cart.
        }
      }
    },
    // preSignUpHook: myPreSubmitFunc,
    // postSignUpHook: myPostSubmitFunc,

    // Texts
    texts: {
      button: {
          signUp: "S'enregistrer!",
          signIn: "Connexion"
      },
      signUpLink_pre: "Vous avez pas un compte ?",
      signUpLink_link: "Inscription",
      socialSignUp: "S'enregistrer",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Mot de passe oublier ?",
          changePwd: "Password Title",
          enrollAccount: "Enroll Title",
          resetPwd: "Reset Pwd Title",
          signIn: "",
          signUp: "",
          verifyEmail: "Verify Email Title",
      },
    },
});
