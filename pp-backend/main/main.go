package main

import (
	"github.com/gin-gonic/gin"
)

type User struct {
	Username string
	Email    string
	Password string
}

var currentUsers []User

func main() {
	router := gin.Default()

	router.POST("/signup", HandleSignUp)

	router.Run(":8080")
}
