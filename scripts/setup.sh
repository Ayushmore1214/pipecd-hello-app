#!/bin/bash

echo "🚀 Creating kind cluster..."
kind create cluster --name pipecd-demo

echo "📦 Installing PipeCD..."
kubectl create namespace pipecd

kubectl apply -n pipecd -f https://raw.githubusercontent.com/pipe-cd/pipecd/master/quickstart/manifests/control-plane.yaml

echo "⏳ Waiting for pods..."
sleep 40

echo "🌐 Starting PipeCD UI..."
kubectl port-forward -n pipecd svc/pipecd 8080