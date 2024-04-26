# PM2

## 安装
```bash
npm i -g pm2
yarn global add pm2
```

## 命令
### start
```bash
pm2 start app.js
pm2 start app.js --watch
```
**options** 
```base
# 设置应用名称
--name <app_name>
# 监听文件变更
--watch
# 设置内存门槛用于应用重启
--max-memory-restart <200MB>
# 日志文件路径
--log <log_path>
# 传给脚本的额外参数
-- arg1 arg2 arg3
# 自动重启的间隔时间 ms
--restart-delay <delay>
# 随着时间的日志前缀
--time
# 不自动重启应用
--no-autorestart
# 附加到应用日志
--no-daemon
# 以集群模式启动应用
-i max
```
### restart
重新开始
### reload
重启
### stop
停止
### delete
删除
```base
# 应用名称
pm2 restart/reload/stop/delete <app_name>
# 应用ID
pm2 restart/reload/stop/delete <app_id>
# 所有应用
pm2 restart/reload/stop/delete all
```
### list/ls/status
查看所有应用状态
### logs
查看日志
```bash
pm2 logs
# 查看较前的日志 200 行
pm2 logs --lines 200
# 以流的形式在打印日志
pm2 logs --raw
```
### monit
实时的仪表盘
### plus
基于Web的仪表板
### startup
生成自启动活动脚本
### save
冻结进程列表进行自动重生
### flush
清空所有日志
### reloadLogs
重载所有日志
