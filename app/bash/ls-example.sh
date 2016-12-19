#!/usr/bin/env bash
# Name: script-example
# Brief: Guildeline example script
# Author: Blue Penguin
readonly SOME_DIR=../
ls $SOME_DIR
# Using explicit exit code declaration here for demonstration
ls_code=$?
if [ $ls_code != 0 ] ; then
    echo "List $SOME_DIR directory operation .. Error"
    exit 1
else
    echo "List $SOME_DIR directory operation .. Ok"
    # More ops ..
fi
exit 0
