const $ = require('nodobjc')

// Import the "Foundation" and "Cocoa" frameworks
$.framework('Foundation')
$.framework('Cocoa')

module.exports.onSpaceChange = function(callback) {

  // Create and register the callback for space change notification
  const AppDelegate = $.NSObject.extend('AppDelegate')
  AppDelegate.addMethod('activeSpaceDidChange:', 'v@:@', callback);
  AppDelegate.register()

  // create an app instance
  const appDelegate = AppDelegate('alloc')('init');

  // add notification to app instance
  $.NSWorkspace('sharedWorkspace') ('notificationCenter')(
    'addObserver', appDelegate, 'selector', 'activeSpaceDidChange:', 'name',
    $.NSWorkspaceActiveSpaceDidChangeNotification, 'object', null
  );

};
