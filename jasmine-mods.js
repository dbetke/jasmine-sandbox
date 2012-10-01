jasmine.stackTraceFilter = function(msg) {
    // at this point, msg is a string containing the stack trace message
    // msg contains multiple lines separated by "\n"
    // this function should return a new string that omits any lines in msg that match
    //     the pattern "jasmine.js:N", where N is a line number
    return msg;
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

