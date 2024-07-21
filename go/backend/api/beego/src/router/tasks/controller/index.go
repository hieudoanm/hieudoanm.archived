package tasks_controller

import (
	"encoding/json"
	"strings"

	tasks_service "bee-starter/src/router/tasks/service"

	beecontext "github.com/beego/beego/v2/server/web/context"
)

func GetTasks(ctx *beecontext.Context) {
	// Get Tasks
	var tasks = tasks_service.GetTasks()

	byteTasks, byteError := json.Marshal(tasks)
	if byteError != nil {
		panic(byteError)
	}

	ctx.Output.Header("Content-Type", "application/json")
	ctx.Output.Body(byteTasks)
}

func CreateTask(ctx *beecontext.Context) {
	// Parse Body
	decoder := json.NewDecoder(ctx.Request.Body)
	var taskRequest tasks_service.TaskRequest
	err := decoder.Decode(&taskRequest)
	if err != nil {
		panic(err)
	}
	// Create New Task
	id := tasks_service.CreateTask(taskRequest)

	byteTask, byteError := json.Marshal(map[string]string{"id": id})
	if byteError != nil {
		panic(byteError)
	}

	ctx.Output.Header("Content-Type", "application/json")
	ctx.Output.Body(byteTask)
}

func GetTaskById(ctx *beecontext.Context) {
	var pathParams []string = strings.Split(ctx.Request.URL.Path, "/")
	var id string = pathParams[2]
	// Get Task
	var task = tasks_service.GetTask(id)

	byteTask, byteError := json.Marshal(task)
	if byteError != nil {
		panic(byteError)
	}

	ctx.Output.Header("Content-Type", "application/json")
	ctx.Output.Body(byteTask)
}

func UpdateTaskById(ctx *beecontext.Context) {
	var pathParams []string = strings.Split(ctx.Request.URL.Path, "/")
	var id string = pathParams[2]
	// Parse Body
	decoder := json.NewDecoder(ctx.Request.Body)
	var taskRequest tasks_service.TaskRequest
	err := decoder.Decode(&taskRequest)
	if err != nil {
		panic(err)
	}
	// Update Task
	var task = tasks_service.UpdateTask(id, taskRequest)
	byteTask, byteError := json.Marshal(task)
	if byteError != nil {
		panic(byteError)
	}

	ctx.Output.Header("Content-Type", "application/json")
	ctx.Output.Body(byteTask)
}

func PatchTaskById(ctx *beecontext.Context) {
	var pathParams []string = strings.Split(ctx.Request.URL.Path, "/")
	var id string = pathParams[2]
	// Parse Body
	decoder := json.NewDecoder(ctx.Request.Body)
	var taskRequest tasks_service.TaskRequest
	err := decoder.Decode(&taskRequest)
	if err != nil {
		panic(err)
	}
	// Update Task
	var task = tasks_service.UpdateTask(id, taskRequest)
	byteTask, byteError := json.Marshal(task)
	if byteError != nil {
		panic(byteError)
	}

	ctx.Output.Header("Content-Type", "application/json")
	ctx.Output.Body(byteTask)
}

func DeleteTaskById(ctx *beecontext.Context) {
	var pathParams []string = strings.Split(ctx.Request.URL.Path, "/")
	var id string = pathParams[2]
	// Get Task
	var task = tasks_service.DeleteTask(id)
	byteTask, byteError := json.Marshal(task)
	if byteError != nil {
		panic(byteError)
	}

	ctx.Output.Header("Content-Type", "application/json")
	ctx.Output.Body(byteTask)
}
