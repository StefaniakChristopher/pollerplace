package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
)

func HandleSignUp(c *gin.Context) {
	var incommingNewUser User
	if err := c.BindJSON(&incommingNewUser); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "Data received successfully",
		"data":    incommingNewUser,
	})

	fmt.Println(incommingNewUser.Email, incommingNewUser.Password, incommingNewUser.Username)

	currentUsers = append(currentUsers, incommingNewUser)
}
