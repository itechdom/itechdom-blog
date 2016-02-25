# resources
### https://en.wikipedia.org/wiki/Haskell_(programming_language)
### https://www.haskell.org/
### official
### https://en.wikibooks.org/wiki/Yet_Another_Haskell_Tutorial/Preamble
### wikibooks
### https://github.com/bitemyapp/learnhaskell
### github repo
# code examples
Here is the [factorial](https://en.wikipedia.org/wiki/Factorial "Factorial") function in Haskell, defined in a few different ways:



-- Type annotation (optional)
factorial :: (Integral a) => a -> a

-- Using recursion
factorial n | n  2 = 1
factorial n = n * factorial (n - 1)

-- Using recursion, with guards
factorial n
  | n  2     = 1
  | otherwise = n * factorial (n - 1)

-- Using recursion but written without pattern matching
factorial n = if n > 0 then n * factorial (n-1) else 1

-- Using a list
factorial n = product [1..n]

-- Using fold (implements product)
factorial n = foldl (*) 1 [1..n]

-- Point-free style
factorial = foldr (*) 1 . enumFromTo 1


### Simple main
main :: IO ()
main = do
    putStrLn "Enter two lines"
    line1  getLine                                    -- line1 :: String
    line2  getLine                                    -- line2 :: String
    putStrLn ("you said: " ++ line1 ++ " and " ++ line2)
### https://wiki.haskell.org/Learn_Haskell_in_10_minutes#Simple_expressions
### simple tutorial
# installation
### https://github.com/bitemyapp/learnhaskell/blob/master/install.md
# concepts
### strict but you don't have to specify sometimes?
-- Type annotation (optional)
factorial :: (Integral a) => a -> a
### do you have to declare things twice?
### Pure
### Lazy
### Functional
### Patentheses not required
# tools
### GHC
### Compiler, REPL, 
### command to compile
### % ghc --make Main.hs -o main
### Cabal
### Package Manager
