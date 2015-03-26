#Kraken lab TaskManager code snippets

##Create dust page create.dust

```html
<form name="create" method="post"/>
	<textarea name="task"></textarea>
	<input type="submit" name="submit"/>
</form>
```

##Add a route for posting details

```javascript
if(req.session && !req.session.tasks){
    //initialize session store
    req.session.tasks = [];
}

router.post('/tasks', function (req, res) {
    if(req.body.task){
        req.session.tasks.push(req.body.task);
    }
    //return to user to the listing page
    res.redirect('/');
});
```

##Add a new route
