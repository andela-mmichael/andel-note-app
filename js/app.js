/*!
 * Andel Note App v1.0.0
 * Author: Mel Michael <Email: mel.michael@andela.co>
 */

 (function(){
 	var app = angular.module('note', []);

 	app.controller('mainController', function() {
 		
 		/* Stores each note */
 		var listNotes = [
 			{
		 		title: 'Welcome to Andel Note',
		 		content: 'This is a default content for the Andel note app. You can add, delete and edit notes. Do check it out.',
		 		select: false
		 	}
		 ];

		this.listNotes = listNotes;

		this.showBtn = true;
		this.showForm = false;
		this.create = false;

		/* Creates a new note */
		this.addNote = function(mydata){
			var newNote = {};
			newNote.title = mydata.title;
			newNote.content = mydata.content;
 			listNotes.push(newNote);
 			this.showForm = false;
 			this.showBtn = true;
 		};

 		/* Displays the form */
 		this.showNote = function(){
 			this.showBtn = false;
 			this.showForm = true;
 		};

 		/* This cancels a form without eaving */
 		this.discard = function(){
 			this.showForm = false;
 			this.showBtn = true;
 		};
 		
 		/* This shows the content for editing. */
 		this.isSelected = function(list){
 			list.select = true;
 		};

 		/* This hides the content after editing */
 		this.save = function(list){
 			list.select = false;
 		};

 		/* This deletes the selected note */
 		this.remove = function(list, $index){
 			if(listNotes.indexOf(list) === 0){
 				listNotes.shift();
 			}

 			listNotes.splice(listNotes.indexOf(list), $index);
 		};
 		

 	});


 }());