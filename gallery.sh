#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 directory_name"
  exit 1
fi

cd "$1" || exit 1

script_name=$(basename "$0")

counter=1

for file in *; do
  if [[ -f "$file" ]] && [[ "$file" != "$script_name" ]]; then
    new_name="$counter${file##*[0-9]}"
    mv -i "$file" "$new_name"
    ((counter++))
  fi
done