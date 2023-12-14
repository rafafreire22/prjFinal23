package com.mateuseosesquilos.prjIntegrador23.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mateuseosesquilos.prjIntegrador23.entities.Jogo;
import com.mateuseosesquilos.prjIntegrador23.repositories.JogoRepository;

@Service
public class JogoService {

		private final JogoRepository jogoRepository;

		public JogoService(JogoRepository jogoRepository) {
			this.jogoRepository = jogoRepository;
		}

		// preparando as buscas por id
		public Jogo getJogoById(Long id) {
			return jogoRepository.findById(id).orElse(null);
		}

		// preparando a busca geral
		public List<Jogo> getAllJogos() {
			return jogoRepository.findAll();
		}

		// salvando o Jogo
		public Jogo saveJogo(Jogo jogo) {
			return jogoRepository.save(jogo);
		}

		// excluindo o Jogo
		public void deleteJogo(Long id) {
			jogoRepository.deleteById(id);
		}
		
	}