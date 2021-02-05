# 这个是干什么就不说了
set -e

# 上传
git pull
git add .
git commit -m 'New Deploy'
git push