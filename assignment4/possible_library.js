//when we have actual server this will work better.
//also need to know more about how to use databases 

//this can get a username and  password from a user database
passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username, password: password }, function (err, user) {
      done(err, user);
    });
  }
));

//this redicrects user back to the home page.
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
    // Authentication successful. Redirect home.
    res.redirect('/');
  });
