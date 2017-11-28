// Authors
// Tom Watson tom@tomjwatson.com
// Jack Lypskyi https://github.com/avaganz

const $ = require('nodobjc')

// Import "Foundation" and "Cocoa" frameworks
$.framework('Foundation')
$.framework('Cocoa')

module.exports.onSpaceChange = function(callback) {

  // Create and register the callback for Space change notification
  const AppDelegate = $.NSObject.extend('AppDelegate')
  AppDelegate.addMethod('activeSpaceDidChange:', 'v@:@', callback);
  AppDelegate.register()

  // Create an app instance
  const appDelegate = AppDelegate('alloc')('init');

  // Add notification to app instance
  $.NSWorkspace('sharedWorkspace') ('notificationCenter')(
    'addObserver', appDelegate, 'selector', 'activeSpaceDidChange:', 'name',
    $.NSWorkspaceActiveSpaceDidChangeNotification, 'object', null
  );

};
