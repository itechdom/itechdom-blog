(defproject clojure-sample "1.1.0"
  :description "Hello World Clojure Web App"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [compojure "1.1.8"]
                 [ring/ring-jetty-adapter "1.3.0"]]
  :main ^:skip-aot sample.app)
