require 'rack'

app = Proc.new do |env|
	['200', {'Content-Type' => 'text/html'}, ['A barebones rack app.']]
end

app = Proc.new {|argument| puts argument}

app.call()
