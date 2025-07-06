// demo-front/__tests__/auth.test.ts

function login(email: string, senha: string): { sucesso: boolean; mensagem?: string } {
  const usuarioValido = {
    email: 'rafael@email.com',
    senha: 'Senha123',
  };

  if (!email || !senha) {
    return { sucesso: false, mensagem: 'Campos obrigatórios' };
  }

  if (email === usuarioValido.email && senha === usuarioValido.senha) {
    return { sucesso: true };
  }

  return { sucesso: false, mensagem: 'Credenciais inválidas' };
}

describe('Testes de Login', () => {
  test('TC_LOGIN_001 - Login com credenciais válidas', () => {
    const resultado = login('rafael@email.com', 'Senha123');
    expect(resultado.sucesso).toBe(true);
  });

  test('TC_LOGIN_002 - Login com senha incorreta', () => {
    const resultado = login('rafael@email.com', 'senhaErrada');
    expect(resultado.sucesso).toBe(false);
    expect(resultado.mensagem).toBe('Credenciais inválidas');
  });

  test('TC_LOGIN_003 - Login com campos vazios', () => {
    const resultado = login('', '');
    expect(resultado.sucesso).toBe(false);
    expect(resultado.mensagem).toBe('Campos obrigatórios');
  });
});
