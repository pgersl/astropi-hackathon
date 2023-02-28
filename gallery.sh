counter=1

for file in *; do
  if [[ -f "$file" ]] && [[ "$file" != "$0" ]]; then
    new_name="$counter${file##*[0-9]}"
    mv -i "$file" "$new_name"
    ((counter++))
  fi
done
