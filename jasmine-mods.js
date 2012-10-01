jasmine.stackTraceFilter = function(msg) {

    /**
    todo: rewrite utilizing a defined array of regular expressions (something like 
      var regexList = ['/jasmine:\d+/', 'jermaine:\d+'];)
    */

    var splitMsg = msg.split("\n"); //create an array of messages separated by \n
    var finalMsg = splitMsg[0] + "\n"; //start the final message with the first line containing the type error

    for (i=1; i<splitMsg.length; i++){  //loop through the message array
 
      if (splitMsg[i].indexOf("jasmine.js") == -1){ //test for messages containing jasmine.js
        //delete msg[i];
        finalMsg += splitMsg[i] + "\n";  //if the message does not contain jasmine.js, add to the final message for output
      }
    }

    return finalMsg;

};

jasmine.HtmlReporter.SpecView.prototype.appendFailureDetail = function() {
  this.detail.className += ' ' + this.status();

  var resultItems = this.spec.results().getItems();
  var messagesDiv = this.createDom('div', { className: 'messages' });

  for (var i = 0; i < resultItems.length; i++) {
    var result = resultItems[i];

    if (result.type == 'log') {
      messagesDiv.appendChild(this.createDom('div', {className: 'resultMessage log'}, result.toString()));
    } else if (result.type == 'expect' && result.passed && !result.passed()) {
      messagesDiv.appendChild(this.createDom('div', {className: 'resultMessage fail'}, result.message));

      if (result.trace.stack) {
        messagesDiv.appendChild(this.createDom('div', {className: 'stackTrace'}, 
                                               jasmine.stackTraceFilter(result.trace.stack)
                                              ));
      }
    }
  }

  if (messagesDiv.childNodes.length > 0) {
    this.detail.appendChild(messagesDiv);
    this.dom.details.appendChild(this.detail);
  }
};

