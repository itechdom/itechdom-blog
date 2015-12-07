### JSON and Ruby

The `json` library is part of the standard library these days, so there is no need to require it in your `Gemfile`.

Requiring the `json` library gives you `JSON.parse` and  `JSON.generate`. It also adds a `.to_json` method to most objects.

```ruby
require 'json'

my_hash = { :hello => "goodbye" }
puts JSON.generate(my_hash) #=> "{\"hello\":\"goodbye\"}"
puts  {:hello => "goodbye" }.to_json #=> "{\"hello\":\"goodbye\"}"
```

```ruby
require 'json'
person = "{\"name\":\"Jennifer Johnson\",\"street\":\"641 Pine St.\",\"phone\":true,\"age\":50,\"pets\":[\"cat\",\"dog\",\"fish\"]}"
puts JSON.parse(person) #=> {"name"=>"Jennifer Johnson", "street"=>"641 Pine St.", "phone"=>true, "age"=>50, "pets"=>["cat", "dog", "fish"]}
```

Alternative Libraries:

* [Oj](http://www.ohler.com/oj/)
* [Yaji](https://github.com/brianmario/yajl-ruby)

* [MultiJSON](https://github.com/intridea/multi_json): Chooses the best parser available