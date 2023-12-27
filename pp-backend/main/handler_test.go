package main

import (
	"net/http"
	"net/http/httptest"
	"strings"
	"testing"

	"github.com/gin-gonic/gin"
)

func performRequest(r http.Handler, method, path string, body string) *httptest.ResponseRecorder {
	req, _ := http.NewRequest(method, path, strings.NewReader(body))
	w := httptest.NewRecorder()
	r.ServeHTTP(w, req)
	return w
}

func TestSignUpHandler(t *testing.T) {
	router := gin.Default()
	router.POST("/signup", HandleSignUp)

	jsonStr := `{"username": "muhammad", "email": "muhammad@mail.com", "password": "muhammad123"}`
	w := performRequest(router, "POST", "/signup", jsonStr)
	if w.Code != http.StatusOK {
		t.Errorf("Expected status code %d but got %d", http.StatusOK, w.Code)
	}
}
