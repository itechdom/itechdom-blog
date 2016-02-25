require 'rx_ruby'

a = Rx::Observable.from_array [ 4, 5, 6 ]
b = Rx::Observable.from_array [ 7, 8, 9 ]

sub  = Rx::Subject.new


b.subscribe(sub)

a.subscribe {|data| sub.on_next(data)}


sub = a.subscribe {|arr| puts arr.to_s }

# => "[4, 7]"
# # => "[5, 8]"
# # => "[6, 9]"
#
# # unsubscribes from the sequence and cleans up anything
# sub.unsubscribe
