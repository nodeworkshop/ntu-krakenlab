#Kraken lab TaskManager code snippets

##Introduction

This is lab was part of a kraken.js workshop held at NTU on 27th March 2015.

The slides are available here:

<iframe src="//www.slideshare.net/slideshow/embed_code/46407994" width="476" height="400" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>

##Disable Lusca Security
```
config\config.json
```

```javascript
       "appsec": {
            "module": {
                "name": "lusca",
                "arguments": [
                    {
                        "csrf": false
                    }
                ]
            }
        },
```

##Add a create-form to the tasks\index.dust

```html
    <form name="create" method="post"/>
		<textarea name="task"></textarea>
		<input type="hidden" name="_csrf" value="{_csrf}" />
		<input type="submit" name="submit"/>
	</form>

...... rest of the page
```

##Add a route for posting details

###Edit the controller
```
controllers\tasks\index.js
```

```javascript
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
```
##List the newly added tasks

###Edit the controller
```
controllers\tasks\index.js
```

```javascript

router.get('/', function (req, res) {
	model.tasks = req.session.tasks;
	res.render('tasks/index', model);
});

```

###Edit the dust view
```
public\templates\tasks\index.dust
```

Append the following to the end of the file.
```html
.......
<h2>List of Tasks</h2>
	<ul>
		{#tasks}
			<li>{.}</li>
		{/tasks}
	</ul>
```
