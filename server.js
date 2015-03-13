(function() {
  'use strict';

  var express = require('express'),
  bodyParser = require('body-parser'),
  fs = require('fs'),
  app = express();
  console.log('phooey!');
//  router = express.Router(),
//  guid = require('guid'),
//  nconf = require('nconf'),
//  mysql = require('mysql');

/*  nconf.argv()
       .env()
       .file({ file: './server-config.json' });
*/
  app.use('/', express.static(__dirname + '/app'));

  app.route('/api/v1/galleries', function(req, res) {
      fs.readdir('www/content', function(err, files) {
          console.log('outputting');
          if (err) { 
              console.log(err);
              return;
          }
          var result = [];
          for (var file in files) {
              result.push({
                  id: file,
                  title: 'Gallery: ' + file,
                  location: file
              });
          }
          res.send(res);
      });
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
/*
  router.route('/survey')
  .post(function(request, response) {
    var connection = mysql.createConnection({
      host: 'localhost',
      user: 'surveyuser',
      password: '7Xuj8dgiucj',
      database: 'surveys'
    }),
    now,
    id,
    entered_value,
    currentAnswer,
    failed = false;

    var answers = request.body.answers;
    if (!answers) {
      console.log('no answers in body');
      response.send(500);
      return;
    } else {
      connection.connect(function(err) {
        if (err && !failed) {
          failed = true;
          console.error(err);
          response.send(500);
          return;
        } else {
          connection.beginTransaction(function(err) {
            if (err && !failed) {
              failed = true;
              console.error('Cannot begin a transaction');
              response.send(500);
              return;
            }
          });
        }
      });
      now = new Date();
      id = guid.create().value;
      for (var answerKey in answers) {
        currentAnswer = answers[answerKey];

        connection.query(
          'insert into survey_results SET ?',
          {
            id: id,
            time_recorded: now,
            prompt: currentAnswer.prompt,
            field: currentAnswer.fieldId,
            value: currentAnswer.value || 'Not Provided'
          }, function(err, result) {
            if (err && !failed) {
              failed = true;
              console.error(err);
              response.send(500);
              return;
            }
          });
      }

      connection.commit(function(err) {
        if (err) {
          connection.rollback(function() {
            if (!failed) {
              failed = true;
              console.error('Cannot roll back.');
              response.send(500);
              return;
            }
          });
        } else {
          console.log('the survey is saved!', request.body);
          response.send(201);
        }
        // ok, we're done, disconnect the connection...
        connection.end(function(err) {
          if (err && !failed) {
            failed = true;
            console.err('connection failed', err);
            response.send(500);
          }
        });
      });
    }

  });

  app.use('/api', router);
  */
   app.use(require('connect-livereload')({
    port: 35729
  }));
  app.listen(3000);

}());
