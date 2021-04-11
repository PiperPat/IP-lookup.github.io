# IP-lookup


Brief:

Sometimes a client says this product has “pat number 12345/17”  (some apparently arbitrary string of letters and numbers).

Sometimes they are actual patent numbers from another country – some types they are a pattern number in a rag e of product styles.

It would be very useful if we could enter the number and then get back a result that says:

This does not match any patent or registered design numbering sequence, or
This is a patent application in “country”
This is the number of a granted patent in “country”
etc

-------------------------

So, this works by simple regex matching. 

It has a dictionary of country, IP-type, and regex data
