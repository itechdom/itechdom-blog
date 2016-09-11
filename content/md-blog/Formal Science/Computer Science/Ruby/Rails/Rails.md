# Concepts
### Asset Pipeline
### What?
#### What

The asset pipeline provides a framework to concatenate and minify or compress JavaScript and CSS assets. It also adds the ability to write these assets in other languages and pre-processors such as CoffeeScript, Sass and ERB.

The asset pipeline is technically no longer a core feature of Rails 4, it has been extracted out of the framework into the sprockets-rails gem that is included in your Rails projects.

The asset pipeline is enabled by default.

#### Main Features

Asset concatenation

Asset minification

Precompilation

The first feature of the pipeline is to concatenate assets, which can reduce the number of requests that a browser makes to render a web page. Fewer requests can mean faster loading for your application.

Sprockets concatenates all JavaScript files into one master .js file and all CSS files into one master .css file. You can customize this strategy to group files any way you like.

In production, Rails inserts an MD5 fingerprint into each filename so that the file is cached by the web browser. You can invalidate the cache by altering this fingerprint, which happens automatically whenever you change the file contents.

The second feature of the asset pipeline is asset minification or compression. For CSS files, this is done by removing whitespace and comments. For JavaScript, more complex processes can be applied. You can choose from a set of built in options or specify your own.

The third feature of the asset pipeline is it allows coding assets via a higher-level language, with precompilation down to the actual assets. Supported languages include Sass for CSS, CoffeeScript for JavaScript, and ERB for both by default.

#### Fingerprinting

Fingerprinting is a technique that makes the name of a file dependent on the contents of the file. When the file contents change, the filename is also changed. For content that is static or infrequently changed, this provides an easy way to tell whether two versions of a file are identical, even across different servers or deployment dates.

When a filename is unique and based on its content, HTTP headers can be set to encourage caches everywhere (whether at CDNs, at ISPs, in networking equipment, or in web browsers) to keep their own copy of the content. When the content is updated, the fingerprint will change. This will cause the remote clients to request a new copy of the content. This is generally known as cache busting.

The technique sprockets uses for fingerprinting is to insert a hash of the content into the name, usually at the end. For example a CSS file global.css

#### Fingerprinting Example

global.css

global-908e25f4bf641868d8683022a5b62f54.css

This is the how Rails names an asset file with MD5 fingerprinting. Every time that the contents of the file change, Rails create a new filename forcing the browser to load it’s contents again.

Rails used to attach a date at the end of the filename, but that strategy had three problems:

- Not all caches reliably cached filenames when used a date parameter

- If different nodes had different time stamps, then you could get many different asset names per node.

- If you deployed, it didn’t matter whether the contents had change, the cache was going to be invalidated therefore loading all the assets again.



global.css

/stylesheets/global.css?1309495796

This is how the asset file looked before in Rails.
### Asset Organization
#### Asset Organization

Pipeline assets can be placed inside an application in one of three locations: app/assets, lib/assets or vendor/assets.

#### Main Folders

app/assets

lib/assets

vendor/assets

app/assets is for assets that are owned by the application, such as custom images, JavaScript files or stylesheets.

lib/assets is for your own libraries' code that doesn't really fit into the scope of the application or those libraries which are shared across applications.

vendor/assets is for assets that are owned by outside entities, such as code for JavaScript plugins and CSS frameworks. Keep in mind that third party code with references to other files also processed by the asset Pipeline (images, stylesheets, etc.), will need to be rewritten to use helpers like asset_path.

#### Asset directories are arbitrary

By default, Rails places three sub-directories in your app/assets directory. These are completely arbitrary. You can name these directories whatever you want or add other directories.

Rails will pick up new files in your app/assets directory, but you have to reset the server if you add a new directory to the app/assets.

Anything in the pipeline will be available at the /assets URL. So, the app/assets/javascripts/application.js in your asset pipeline will be available in development at http://localhost:3000/assets/application.js. app/assets/stylesheets/application.css will also be available at the root of your asset directory. 

The asset pipeline will completely flatten your directory structure when you spin up your development server or precompile your assets.

#### Example

app/assets/javascripts/home.js

lib/assets/javascripts/moovinator.js

vendor/assets/tino_cochino/slider.js

vendor/assets/barbie_hair/phonebox.js

Let’s say that you have these files under your assets. Rails doesn’t care the subfolders that you use. It will flatten them all and put them under the assets url.

http://localhost:3000/assets/home.js 

http://localhost:3000/assets/moovinator.js 

http://localhost:3000/assets/slider.js 

http://localhost:3000/assets/phonebox.js

This will be referenced like this.
### Asset Lookup
#### Asset Lookup

Enter this in the rails console

> y Rails.application.config.assets.paths

At it's core, the asset pipeline is a list of load paths. You can see these load paths by firing up the Rails console.

The y method just formats the hash as YAML.

This is my load path

---

- "/Users/Jorge/Dropbox/projects/classes/storedom/app/assets/images"

- "/Users/Jorge/Dropbox/projects/classes/storedom/app/assets/javascripts"

- "/Users/Jorge/Dropbox/projects/classes/storedom/app/assets/stylesheets"

- "/Users/Jorge/Dropbox/projects/classes/storedom/vendor/assets/javascripts"

- "/Users/Jorge/Dropbox/projects/classes/storedom/vendor/assets/stylesheets"

- "/Users/Jorge/.rvm/gems/ruby-2.1.3/gems/less-rails-bootstrap-3.2.0/app/assets/fonts"

- "/Users/Jorge/.rvm/gems/ruby-2.1.3/gems/less-rails-bootstrap-3.2.0/app/assets/javascripts"

- "/Users/Jorge/.rvm/gems/ruby-2.1.3/gems/less-rails-bootstrap-3.2.0/app/assets/stylesheets"

- "/Users/Jorge/.rvm/gems/ruby-2.1.3/gems/turbolinks-2.2.2/lib/assets/javascripts"

- "/Users/Jorge/.rvm/gems/ruby-2.1.3/gems/jquery-rails-3.1.1/vendor/assets/javascripts"

- "/Users/Jorge/.rvm/gems/ruby-2.1.3/gems/coffee-rails-4.0.1/lib/assets/javascripts"

The asset pipeline works its way through your load path. The first asset with a given name wins. 

If you had an asset named app/assets/stylesheet.css.scss and another called vendor/assets/stylesheet.css.scss, the asset in your app/assets directory would win because it occurs first in the load path.

Adding to the Search Path

By default, Rails will search the first set of directories directly under app/assets, lib/assets, vendor/assets. You can add additional paths to the asset pipeline.

Let's say you're living in the future and you want to include some Adobe Flash. And you want to store your flashy Flash apps in app/flash/assets—in an effort from infecting your other assets with a case of the early 2000s. You can add that path to the asset pipeline in config/initializers/assets.rb.

Add this line to the config/initializers/assets.rb

Rails.application.config.assets.paths 

create a flashy.txt file

$ touch app/flash/assets/flashy.txt

put this into flashy.txt

Rockin’ like 2002

visit this path

http://localhost:3000/assets/flashy.txt
### Manifests
#### What are Manifests?

Manifests are a way to pull in other, related files. So, if I request application.js and it requires another.js in it's manifest, I will get both of them.

#### Application.js

Let’s look at the application.js

// require_tree

// require_directory .

Define the files manually

// require_tree . requires all of the files in that directory and all subdirectories.

// require_directory . loads all of the files in the directory but not the subdirectories.

Alternatively, you can manually define the files you want to include.

In this example, we're looking at application.js; so, we're using JavaScript comments. If you're in application.css then it would be in CSS comments.

//= require jquery

//= require jquery_ujs

//= require twitter/bootstrap

//= require turbolinks

//= require_tree .

This is the application.js in Storedom.

Remember that order matters.

#### Manifest Directives

require

include 

require_self

require_directory

require_tree

depend_on

stub

require grabs an asset and puts it in our bundle once.

include works a lot like require, but it will allow you to include a file more than once. (I have yet to find a practical use for this directive.)

require_self tells Sprockets to load the body of the current file before loading any of the dependencies. You would use this if you wrote any styles or JavaScript in application.css or application.js respectively and you wanted Sprockets to load that code before loading any of the required assets.

require_directory requires all of the source files of the same format in a given directory. It only goes one level deep.

require_tree works like require_directory, but it also traverses subdirectories.

depend_on announces that you depend on a file, but does not include it in the asset bundle.

stub blacklists a dependency from the bundle.

#### SASS / SCSS

Use @import instead of require
### ActionView helpers
#### ActionView Helpers

 "all" %>

  

You’ve probably seen this.

ActionView gives you a set of helper methods that you can use in your views to include assets.

audio_path("horse.wav")  # /audios/horse.wav

audio_tag("sound")       # 

font_path("font.ttf")    # /fonts/font.ttf

image_path("edit.png")   # "/images/edit.png"

image_tag("dog.png")     # 

video_path("hd.avi")     # /videos/hd.avi

video_tag("trailer.ogg") # 

See ActionView::Helpers::AssetTagHelper documentation for more information.

The sass-rails gem also has a set of helpers that allow you to reference other assets without having to know their exact location. This should help you resist the temptation of using ERB in your .scss assets.
### Env Setup
#### Debugging Assets

As we mentioned in the beginning, the whole idea of the asset pipeline is to concatenate everything into one file, because performance. But, we'll notice that when we spin up our application in development, we'll see many files listed in the resources tab of the Chrome Developer Tools.

Open config/environments/development.rb

config.assets.debug = true

This is because this functionality is disabled in config/environments/development.rb:

Debug mode disables concatenation and preprocessing of assets. This option causes significant delays in view rendering with a large number of complex assets. However it is useful for debugging.

This option is turned off in production.

#### Precompile assets

If you request an asset in development, Rails will check public/assets first. If your asset is not there, it will hit up the asset pipeline and compile it on the fly. This is useful in development because you're likely to be making frequent changes and edits to those files. But, it would also be a performance bottleneck in production if Rails had to compile those files on every request.

Your assets have to be either required in your asset pipeline or precompiled

To do so, you can either include them in the manifest or indicate your app to precompile it.

In app/assets/stylesheets/application.css

// = require_self

// = require 'site'

Let's say you had a stylesheet called site.css.scss. You could simply require it in application.css.

In config/initializers/assets.rb

config.assets.precompile += %w( site.css )

Alternatively, you can add it to the precompile list similar to the way we added a load path earlier.

However, in practice, by establishing the require_tree ., Rails got you covered.

#### What happens when we precompile?

When you run rake assets:precompile, Rails goes through your assets and copies everything over to public/assets. It then creates application.js and application.css by reading the manifests. It does not look at any other file unless you explicitly tell it to.

When using config.assets.precompile, the file extension of the target file matters. config.assets.precompile += %w( site ) will not work.

JavaScripts and stylesheets must either be included in a manifest or explicitly added to the config.assets.precompile directive.

Rails copies all the assets into  public/assets

Rails then creates an application.js and application.css by reading the manifests

When using config.assets.precompile, the file extension matters. 

When you run rake assets:precompile, Rails goes through your assets and copies everything over to public/assets. It then creates application.js and application.css by reading the manifests. 

When using config.assets.precompile, that the file extension matters. config.assets.precompile += %w( site ) will not work.

JavaScripts and stylesheets must either be included in a manifest or explicitly added to the config.assets.precompile directive.
### MVC


### Bundler
### Rack
### Routing
### Action Mailer
#### Action Mailers

* Similar to controllers:

    * they inherit from ActionMailer::Base

    * they have layouts 

    * they have custom methods

* http://guides.rubyonrails.org/action_mailer_basics.html

#### The mailer

* How to generate mailers:

```ruby

rails generate mailer YourNameMailer

```

* Layouts are specified in:

```ruby

class ApplicationMailer 

  layout 'mailer'

end

```

```ruby

class UserMailer 

  default from: 'notifications@example.com'

  def welcome_email(user)

    @user = user

    mail(to: @user.email, subject: 'Welcome to My Awesome Site')

  end

end

```

#### Connecting to a controller

* Where to call mailers

* Sending now or later?

```ruby

class UsersController 

  # POST /users

  # POST /users.json

  def create

    @user = User.new(params[:user])

      if @user.save

        # Tell the UserMailer to send a welcome email after save, hence the later

        UserMailer.welcome_email(@user).deliver_later

        redirect_to(@user, notice: 'User was successfully created.')

      else

        render action: 'new' 

      end

  end

end

```

#### Layouts

* Due to some email clients not accepting HTML formatted emails, we use text only emails.

#### Configuration

* We will use Mandrill

* Configuration is done in Application.rb

```ruby

     config.action_mailer.delivery_method = :smtp 

      config.action_mailer.smtp_settings = { 

        address:              'smtp.mandrillapp.com', 

        port:                 '587', 

        domain:               'blogger.com', 

        user_name:            YOUR_USER_NAME_HERE, 

        password:             YOUR_API_KEY_HERE, 

        authentication:       'plain', 

        enable_starttls_auto: true 

      }

```

#### Testing

http://guides.rubyonrails.org/testing.html#testing-your-mailers

* Unit testing: test your mailer separately to see if:

  * subject, from and body are correctly being sent

* Integration testing:

  * test the controller to make sure that the action that's sending the email is sending it correctly
### Caching
## Learning Goals

* In a world with no Caching.

* What's Caching when do we Cache.

* Learn About the three main caching techniques:

    * Page Caching: cache static pages

    * Action Caching: run the before filters and cache the rest

    * Fragment Caching: A fragment of the view can be wrapped in a cache block

* Learn how to use a Cache store alongside a memcache.

* Learn how to use Redis as a store.

http://guides.rubyonrails.org/caching_with_rails.html

https://github.com/rtomayko/rack-cache
### basics
#### Caching in Rails

* Page Caching: cache static pages.

* Action Caching: Page caching isn't realistic. This would run the before filters and cache the rest of the page.

* The previous two were taken out of Rails 4 core and put in a separate gem.

* Fragment Caching: 

    * Action caching isn't ideal since we can't always cache the whole page. 

    * It's more practical to cache parts of the page.

#### Caching in Rails: Cont

* http://guides.rubyonrails.org/caching_with_rails.html#fragment-caching

* Let's look at:

    * Caching one action.

    * Caching All actions

    * Expiring the cache: Manually, Automatically using a helper
### Using a cache store
### Redis
### Memecache
### fragement caching
#### Setup: Fragment Caching

* Repository

```

git clone https://github.com/turingschool-examples/storedom.git caching_strategies

```

Procedure

Go to site and explore the app. Show how to read the output in the console for the items/index page.

Turn on caching in development.

Restart the server.

Add “cache do” to cache all the items in items/index.

Refresh items/index and check the response time.

Add a second “cache do” for items count.

Explain inconsistencies.

Add “action” and “action_sufix” in “cache do” to fix the problem.

-> Workshop 1.

__

 Create a new item via the console and show how it was not updated in the page.

 Use after_create, after_update, after_destroy callbacks to invalidate the cache. Show how this fixes it.

 -> Workshop 2.

__

 Use a CacheInvalidator concern to reduce duplication.

 Explain what are the pros and cons of the concern technique.

 Create “cache_key_for(model)” helper in ApplicationController.

 Refactor views to use Russian doll caching: “cache(record) do”.

 Add an a new item and check that it is added in the view.

 -> Workshop 3.

__

 Change the name of an item that is contained in the first order via the terminal.

 Verify that this is changed in the orders view.

 Go to order in which the updated item should appear and check that the old name is still there.

 Use “after_create”, “after_update” and “after_destroy” callbacks to update the orders associated with the item.

 Modify another item belonging to the first order and check that the order was updated.

__

 Install redis via homebrew (“brew install redis”).

 Start redis (“redis-server”).

 Add “redis-rails” to Gemfile.

 Modify configuration file to use redis instead of memory caching.  “config.cache_store = :redis_store, ‘redis://localhost:6379/0/cache”.

 Restart the server.

 Check the logs and compare the speed.

 Show how to access the keys in redis via the redis-cli (KEYS *).

 BONUS: Refactor callbacks using a ManyToManyAssociationsUpdater concern

Workshops

Add caching to order count and order details.

Go to /orders and check the response times in your logs.

Add “cache do” to all the orders.

Add “cache do” to the orders count.

Add “action” and “action_suffix”.

Check /users and see the difference in response times.

Update orders cache.

Create a new order from the console. It has to have a user_id.

Go to the orders page and see that the new order hasn’t appeared.

Add callbacks (after_create, after_update, after_destroy) to invalidate cache.

Create a new order and verify that it appears in the page.

Refactor the orders view.

Add Russian doll caching to the order record.

Use the cache_key_for(model) helper to create a new fragment that encompasses all the view.

Create a new record and verify that it is still working.

Implementation

app/views/items/index.html.erb



  

    

      

         Items

      

    

    >

    

      

        

          

          

          

        

      

    

  



app/helpers/application_helper.rb

module ApplicationHelper

  def cache_key_for(model)

    prefix         = model.to_s.downcase.pluralize

    count          = model.count

    max_updated_at = model.maximum(:updated_at).try(:utc).try(:to_s, :number)

    "#{prefix}/all-#{count}-#{max_updated_at}"

  end

end

app/models/item.rb

class Item 

  # include CacheInvalidator

  # include ManyToManyAssociationsUpdater

  has_many :order_items

  has_many :orders, through: :order_items

  after_create  :update_orders

  after_update  :update_orders

  after_destroy :update_orders

  def update_orders

    orders.each do |order|

      order.updated_at = Time.now

      order.save

    end

  end

end

app/models/concerns/cache_invalidator.rb

module CacheInvalidator

  extend ActiveSupport::Concern

  included do

    after_create :invalidate_cache

    after_update :invalidate_cache

    after_destroy :invalidate_cache

    def invalidate_cache

      Rails.cache.clear

    end

  end

end

app/models/concerns/many_to_many_associations_updater.rb

module ManyToManyAssociationsUpdater

  extend ActiveSupport::Concern

  included do

    after_create  :update_associations

    after_update  :update_associations

    after_destroy :update_associations

    def associations

      self.class.reflect_on_all_associations(:has_many).map(&:name)

    end

    def update_associations

      associations.each { |association| update_association(association) }

    end

    def update_association(association)

      send(association).each { |record| record.update_attributes(updated_at: Time.now) }

    end

  end

end
### Background Workers
# Resources
### http://guides.rubyonrails.org/
### Rails Guide
### http://www.sitepoint.com/whats-new-rails-5/
### what's new in Rails 5
# Environment Setup
