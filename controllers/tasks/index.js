'use strict';


var TasksModel = require('../../models/tasks');


module.exports = function (router) {

    var model = new TasksModel();

    router.get('/', function (req, res) {
        model.tasks = req.session.tasks;
        res.render('tasks/index', model);
    });

    router.post('/', function (req, res) {

        if(req.session && !req.session.tasks){
            //initialize session store
            req.session.tasks = [];
        }

        if(req.body.task){
            req.session.tasks.push(req.body.task);
        }
        //return to user to the listing page
        res.redirect('/tasks/');
    });

};
