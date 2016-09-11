# Core
### Source Code analysis
### wp-includes
### modules
### load.php
### https://github.com/WordPress/WordPress/blob/master/wp-includes/load.php
### loads wordpress
### Fix server vars
### set by apache?
### don't load wordpress if the request is for the favicon
### load wp-db
### make a global wpdb?
### set language folder for translation service
### set encoding
### object cache?
By default, the object cache is non-persistent. This means that data stored in the cache resides in memory only and only for the duration of the request. Cached data will not be stored persistently across page loads unless you install a [persistent caching](https://codex.wordpress.org/Class_Reference/WP_Object_Cache#Persistent_Caching) plugin
### https://codex.wordpress.org/Class_Reference/WP_Object_Cache
### memory caching
### wp_cache functions
## wp_cache functions

Most of these functions take a:

*   $key: the key to indicate the value.
*   $data: the value you want to store.
*   $group: (optional) this is a way of grouping data within the cache. Allows you to use the same key across different groups.
*   $expire: (optional) this defines how many seconds to keep the cache for. Only applicable to some functions. Defaults to 0 (as long as possible).

wp_cache_add( $key, $data, $group, $expire )


This function adds data to the cache if the cache key doesn't already exist. If it does exist, the data is not added and the function returns false.

wp_cache_set( $key, $data, $group, $expire )


Adds data to the cache. If the cache key already exists, then it will be overwritten; if not then it will be created.

wp_cache_get( $key, $group )
wp_cache_get( $key, $group = '', $force = false, $found = null )


Returns the value of the cached object, or false if the cache key doesn't exist.

To disambiguate a cached false from a non-existing key, you should do absolute testing of $found, which is passed by reference, against false: if $found === false, the key does not exist.

wp_cache_delete( $key, $group )


Clears data from the cache for the given key.

wp_cache_replace( $key, $data, $group, $expire )


Replaces the given cache if it exists, returns false otherwise. This is similar to wp_cache_set() except the cache object is not added if it doesn't already exist.

wp_cache_flush()


Clears all cached data.

wp_cache_add_non_persistent_groups($groups)


Hints to the object cache that the group or list of groups should not be cached in persistent storage. This is useful when adding items to the cache that should only be available for the duration of a script session, and not beyond. $groups can be an array of strings, or a single group name. NB: only some caching plugins implement this function!

## Examples

The most common use for the object cache is caching the results of expensive SQL queries so they're not performed multiple times within a page load. In the below example, imagine the $query variable is an expensive SQL query.

$result = wp_cache_get( 'my_result' );
if ( false === $result ) {
	$result = $wpdb->get_results( $query );
	wp_cache_set( 'my_result', $result );
} 
// Do something with $result;
### is multisite
### die function
### kills everything displays a message
### wordpress API
### functions.php
### https://github.com/WordPress/WordPress/blob/master/wp-includes/functions.php
### rest-api
### https://github.com/WordPress/WordPress/tree/master/wp-includes/rest-api
### some js, html ... etc
### for the installation process
### wp-content
### Themes
### Plugins
### wp-admin
### admin stuff
### General guidlines
### class- prefix
### a class is being used
### ms- prefix
### for multisite
### wp_
### that means it's using something from the wp-includes or (core)
### pain points
### What are magic quotes
### Root
### https://github.com/WordPress/WordPress
### wp-load.php
/**

 * Bootstrap file for setting the ABSPATH constant

 * and loading the wp-config.php file. The wp-config.php

 * file will then load the wp-settings.php file, which

 * will then set up the WordPress environment.

 *

 * If the wp-config.php file is not found then an error

 * will be displayed asking the visitor to set up the

 * wp-config.php file.

 *

 * Will also search for wp-config.php in WordPress' parent

 * directory to allow the WordPress directory to remain

 * untouched.
### wp-config.php
### wp-settings.php
### this is the magic file that loads everything after setting stuff in the previous module
### do_actions appear here
### wp_includes/
### https://developer.wordpress.org/reference/functions/do_action/
### Execute functions hooked on a specific action hook.
# Concepts
My impression is that Wordpress is a bunch of actions that you can hook to.

So, for example, we have an add_admin initiated by admin.php. You can hook into these actions (they run by priority?) and you can modify the behavior somehow.
### Hooks
### Actions
### you add a function to enable them to do something
### Filters
### Example Code














/**







* @package Hello_Dolly







* @version 1.6







*/







/*







Plugin Name: Hello Dolly







Plugin URI: http://wordpress.org/plugins/hello-dolly/







Description: This is not just a plugin, it symbolizes the hope and enthusiasm of an entire generation summed up in two words sung most famously by Louis Armstrong: Hello, Dolly. When activated you will randomly see a lyric from Hello, Dolly in the upper right of your admin screen on every page.







Author: Matt Mullenweg







Version: 1.6







Author URI: http://ma.tt/







*/















function hello_dolly_get_lyric() {







/** These are the lyrics to Hello Dolly */







$lyrics = "Hello, Dolly







Well, hello, Dolly







It's so nice to have you back where you belong







You're lookin' swell, Dolly







I can tell, Dolly







You're still glowin', you're still crowin'







You're still goin' strong







We feel the room swayin'







While the band's playin'







One of your old favourite songs from way back when







So, take her wrap, fellas







Find her an empty lap, fellas







Dolly'll never go away again







Hello, Dolly







Well, hello, Dolly







It's so nice to have you back where you belong







You're lookin' swell, Dolly







I can tell, Dolly







You're still glowin', you're still crowin'







You're still goin' strong







We feel the room swayin'







While the band's playin'







One of your old favourite songs from way back when







Golly, gee, fellas







Find her a vacant knee, fellas







Dolly'll never go away







Dolly'll never go away







Dolly'll never go away again";















// Here we split it into lines







$lyrics = explode( "\n", $lyrics );















// And then randomly choose a line







return wptexturize( $lyrics[ mt_rand( 0, count( $lyrics ) - 1 ) ] );







}















// This just echoes the chosen line, we'll position it later







function hello_dolly() {







$chosen = hello_dolly_get_lyric();







echo "$chosen";







}















// Now we set that function up to execute when the admin_notices action is called







add_action( 'admin_notices', 'hello_dolly' );















// We need some CSS to position the paragraph







function dolly_css() {







// This makes sure that the positioning is also good for right-to-left languages







$x = is_rtl() ? 'left' : 'right';















echo "















#dolly {







float: $x;







padding-$x: 15px;







padding-top: 5px;







margin: 0;







font-size: 11px;







}















";







}















add_action( 'admin_head', 'dolly_css' );















?>






# Impressions
My Impression are:



*   Source code doesn't look very modular, though it's readable
*   Not a ton of source code comments (intentional?)
*   What's this code?

/** Make sure that the WordPress bootstrap has run before continuing. */  
require( dirname(__FILE__) . '/wp-load.php' );   


Why is this loaded everytime? in multiple files
# Resources
### Basics
## Learn How to Use WordPress





*   [Getting Started with WordPress](https://codex.wordpress.org/Getting_Started_with_WordPress "Getting Started with WordPress")
*   [New To WordPress - Where to Start](https://codex.wordpress.org/New_To_WordPress_-_Where_to_Start "New To WordPress - Where to Start")
*   [WordPress in Your Language](https://codex.wordpress.org/WordPress_in_Your_Language "WordPress in Your Language")
*   [WordPress Lessons](https://codex.wordpress.org/WordPress_Lessons "WordPress Lessons")
*   [Upgrading WordPress](https://codex.wordpress.org/Upgrading_WordPress "Upgrading WordPress")
*   [WordPress.tv](http://wordpress.tv/)
*   [Frequently Asked Questions](https://codex.wordpress.org/FAQ "FAQ")





*   [Creating and Using Posts](https://codex.wordpress.org/Posts "Posts")
*   [Creating and Using Pages](https://codex.wordpress.org/Pages "Pages")
*   [Using Plugins](https://codex.wordpress.org/Plugins "Plugins")
*   [Using Themes](https://codex.wordpress.org/Themes "Themes")
*   [Using Permalinks](https://codex.wordpress.org/Using_Permalinks "Using Permalinks")
*   [WordPress Semantics](https://codex.wordpress.org/WordPress_Semantics "WordPress Semantics")
*   [Finding More WordPress Help](https://codex.wordpress.org/Getting_More_Help "Getting More Help")




### Advanced




## Working With Themes

*   [Theme Development](https://codex.wordpress.org/Theme_Development "Theme Development")
*   [Child Themes](https://codex.wordpress.org/Child_Themes "Child Themes")
*   [Blog Design and Layout](https://codex.wordpress.org/Blog_Design_and_Layout "Blog Design and Layout")





## Write a Plugin

*   [Writing a Plugin](https://codex.wordpress.org/Writing_a_Plugin "Writing a Plugin")
*   [Plugin API](https://codex.wordpress.org/Plugin_API "Plugin API")
*   [Plugin Resources](https://codex.wordpress.org/Plugin_Resources "Plugin Resources")









## Contribute to Development

*   [Contributing to WordPress](https://codex.wordpress.org/Contributing_to_WordPress "Contributing to WordPress")
*   [Developer Documentation](https://codex.wordpress.org/Developer_Documentation "Developer Documentation")
*   [Reporting Bugs](https://codex.wordpress.org/Reporting_Bugs "Reporting Bugs")
*   [WordPress Development Blog](http://wpdevel.wordpress.com/)
*   [WordPress Security](https://codex.wordpress.org/Hardening_WordPress "Hardening WordPress")
*   [WordPress_API's](https://codex.wordpress.org/WordPress_API%27s "WordPress API's")
*   [FAQ Developer Documentation](https://codex.wordpress.org/FAQ_Developer_Documentation "FAQ Developer Documentation")





## Give Back

*   [Volunteers Needed for Codex Documentation](https://codex.wordpress.org/Codex:Contributing "Codex:Contributing")
*   [WordPress Documentation Team](https://codex.wordpress.org/Documentation_team "Documentation team")
*   [Become a WordPress Support Forum Volunteer](https://codex.wordpress.org/Support_Forum_Volunteers "Support Forum Volunteers")




### reference page
### https://developer.wordpress.org/reference/
### Wordpress Book
### https://github.com/WordPress/book
### Security
### https://github.com/WordPress/Security-White-Paper
### wordpress heroku
### https://github.com/mhoofman/wordpress-heroku
# Project Starters
# Programmed in
### PHP
# Third party
### Calypso
### Backend written in React and interacts with wordpress.com REST API
### https://github.com/Automattic/wp-calypso
### Tinymce
### Editor?
