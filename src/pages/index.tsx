import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente'
import styles from '../styles/Home.module.css'

export default function Home() {

  const clientes = [
    new Cliente('Ana', 34, '1'),
    new Cliente('Bia', 45, '2'),
    new Cliente('Carlos', 23, '3'),
    new Cliente('Pedro', 54, '4'),

  ]

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to bg-purple-900
    text-black
    `}>
      <Layout titulo="Cadastro Simples">
        <Tabela clientes={clientes} />
      </Layout>
    </div>
  )
}
