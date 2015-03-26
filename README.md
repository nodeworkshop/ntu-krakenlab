#Kraken lab TaskManager code snippets

##Add a create-form to the tasks\index.dust

```html
<form name="create" method="post"/>
	<textarea name="task"></textarea>
	<input type="submit" name="submit"/>
	<input type="hidden" name="_csrf" value="<%= _csrf %>" />
</form>

...... rest of the page
```

##Add a route for posting details

```
controllers\tasks\index.js
```

```javascript
if(req.session && !req.session.tasks){
    //initialize session store
    req.session.tasks = [];
}

router.get('/', function (req, res) {
	model.tasks = req.session.tasks;
	res.render('tasks/index', model);
});

router.post('/', function (req, res) {
    if(req.body.task){
        req.session.tasks.push(req.body.task);
    }
    //return to user to the listing page
    res.redirect('/');
});
```
