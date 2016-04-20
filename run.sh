OS=`uname -s`
if [ "$OS" == 'Darwin' ]; then
    open "http://localhost:8000/visualizer.html" && python -m SimpleHTTPServer
else
    gnome-open "http://localhost:8000/visualizer.html" && python -m SimpleHTTPServer
fi
