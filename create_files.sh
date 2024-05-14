# запустить в терминале ./create_files.sh имя папки false (опционально false если не нужен файл .stories.tsx)
#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Usage: $0 <folder_name> [exclude_stories]"
    exit 1
fi

folder_name=$1
exclude_stories=false

if [ "$2" = "false" ]; then
    exclude_stories=true
fi

if [ -d "./src/pages/$folder_name" ]; then
    echo "The $folder_name folder already exists."
    exit 1
fi

mkdir -p "./src/pages/$folder_name"

file_name=$folder_name

touch "./src/pages/$folder_name/$file_name.tsx" "./src/pages/$folder_name/$file_name.module.scss"

if [ "$exclude_stories" = "true" ]; then
    touch "./src/pages/$folder_name/$file_name.stories.tsx"
fi

boilerplate="import { FC } from 'react'
import cls from './$file_name.module.scss'

interface I${file_name}Props {
    
}

export const ${file_name}: FC<I${file_name}Props> = ({}) => {
    return (
        <div className={cls.${file_name}}>
            
        </div>
    )
}"

echo "$boilerplate" > "./src/pages/$folder_name/$file_name.tsx"

echo "Files created: $file_name.tsx, $file_name.module.scss"

if [ "$exclude_stories" = "false" ]; then
    echo "and $file_name.stories.tsx"
else
    echo "Excluded $file_name.stories.tsx"
fi
