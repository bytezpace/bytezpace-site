# Bytezpace — site institucional estático. Sem build, sem dependências.

PORT ?= 8080

.PHONY: start serve open help

## start: sobe o site localmente em http://localhost:$(PORT)
start:
	@echo "Bytezpace rodando em http://localhost:$(PORT)  (Ctrl+C para parar)"
	@python3 -m http.server $(PORT) --bind 127.0.0.1

## serve: alias de start
serve: start

## open: sobe o site e abre no navegador padrão
open:
	@( sleep 1 && xdg-open "http://localhost:$(PORT)" >/dev/null 2>&1 & ) ; $(MAKE) start

## help: lista os targets
help:
	@grep -E '^## ' $(MAKEFILE_LIST) | sed 's/## /  make /'
