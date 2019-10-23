package main

import "flag"
import "fmt"
import "net/http"

func main() {

	var port int
	var path string
	flag.IntVar(&port, "port", 6080, "port")
	flag.StringVar(&path, "path", "./", "path")
	flag.Parse()
	panic(http.ListenAndServe(fmt.Sprintf(":%d", port), http.FileServer(http.Dir(path))))
}
