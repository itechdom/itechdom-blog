#!/bin/bash
echo "Before getopt"
for i
do
    echo $i
done
args=`getopt abc:d $*`
set -- $args
echo "After getopt"
for i
do
    echo "-->$i"
done
