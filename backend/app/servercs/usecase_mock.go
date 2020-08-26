// Code generated by MockGen. DO NOT EDIT.
// Source: usecase.go

// Package servercs is a generated GoMock package.
package servercs

import (
	reflect "reflect"

	model "github.com/Toringol/csgo-trainingCamp/backend/app/model"
	gomock "github.com/golang/mock/gomock"
)

// MockUsecase is a mock of Usecase interface
type MockUsecase struct {
	ctrl     *gomock.Controller
	recorder *MockUsecaseMockRecorder
}

// MockUsecaseMockRecorder is the mock recorder for MockUsecase
type MockUsecaseMockRecorder struct {
	mock *MockUsecase
}

// NewMockUsecase creates a new mock instance
func NewMockUsecase(ctrl *gomock.Controller) *MockUsecase {
	mock := &MockUsecase{ctrl: ctrl}
	mock.recorder = &MockUsecaseMockRecorder{mock}
	return mock
}

// EXPECT returns an object that allows the caller to indicate expected use
func (m *MockUsecase) EXPECT() *MockUsecaseMockRecorder {
	return m.recorder
}

// ListServers mocks base method
func (m *MockUsecase) ListServers() ([]*model.ServerCS, error) {
	m.ctrl.T.Helper()
	ret := m.ctrl.Call(m, "ListServers")
	ret0, _ := ret[0].([]*model.ServerCS)
	ret1, _ := ret[1].(error)
	return ret0, ret1
}

// ListServers indicates an expected call of ListServers
func (mr *MockUsecaseMockRecorder) ListServers() *gomock.Call {
	mr.mock.ctrl.T.Helper()
	return mr.mock.ctrl.RecordCallWithMethodType(mr.mock, "ListServers", reflect.TypeOf((*MockUsecase)(nil).ListServers))
}
