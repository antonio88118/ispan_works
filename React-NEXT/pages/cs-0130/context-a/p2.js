import React from 'react'
import { useTheme } from '@/hooks/use-theme'
import Link from 'next/link'

export default function P2() {
  const { theme } = useTheme()

  return (
    <>
      <h1>Page2</h1>
      <p
        style={{
          backgroundColor: theme === 'dark' ? '#000' : '#fff',
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        古早以前，要做音樂非得去錄音室，因為設備不普遍、也非常昂貴，個人很難負擔得起。隨著時代改變，個人電腦的速度大有進步，要跑得動音樂製作軟體不再是難事。同時，很多製造商也發展出消費等級的錄音器材，一套堪用的器材，甚至可以不比一部電腦貴。國外近年來Home
        Studio(個人音樂工作室，通常是設在家裡的一個房間)林立，而其中某些Home
        studio做出來的音樂，水準更可與商業等級比擬。有音樂才華的你，何不試試把自己的才能轉化成更精緻的音樂？古早以前，要做音樂非得去錄音室，因為設備不普遍、也非常昂貴，個人很難負擔得起。隨著時代改變，個人電腦的速度大有進步，要跑得動音樂製作軟體不再是難事。同時，很多製造商也發展出消費等級的錄音器材，一套堪用的器材，甚至可以不比一部電腦貴。國外近年來Home
        Studio(個人音樂工作室，通常是設在家裡的一個房間)林立，而其中某些Home
        studio做出來的音樂，水準更可與商業等級比擬。有音樂才華的你，何不試試把自己的才能轉化成更精緻的音樂？
      </p>
      <a href="/cs-0130/context-a/p1">到page1(a標籤)</a>
      <br />
      <Link href="/cs-0130/context-a/p1">到page1</Link>
    </>
  )
}
