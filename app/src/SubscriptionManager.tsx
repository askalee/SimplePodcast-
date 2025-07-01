import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const recommended = [
  { title: 'Example Podcast 1', url: 'https://example.com/feed1.xml' },
  { title: 'Example Podcast 2', url: 'https://example.com/feed2.xml' },
  { title: 'Example Podcast 3', url: 'https://example.com/feed3.xml' }
]

function SubscriptionManager() {
  const [input, setInput] = useState('')
  const [feeds, setFeeds] = useLocalStorage<string[]>('subscribedFeeds', [])

  const subscribe = (url: string) => {
    if (!url) return
    if (!feeds.includes(url)) {
      setFeeds([...feeds, url])
    }
    setInput('')
  }

  const remove = (url: string) => {
    setFeeds(feeds.filter(f => f !== url))
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-2">訂閱 Podcast</h1>
      <div className="mb-4">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="輸入 RSS 連結"
          className="border p-2 mr-2 w-64"
        />
        <button
          onClick={() => subscribe(input)}
          className="bg-blue-600 text-white px-3 py-2 rounded"
        >
          訂閱
        </button>
      </div>
      <div className="mb-4">
        <h2 className="font-semibold mb-1">推薦節目</h2>
        <ul>
          {recommended.map(r => (
            <li key={r.url} className="mb-1">
              {r.title}
              <button
                className="ml-2 text-blue-600 underline"
                onClick={() => subscribe(r.url)}
              >訂閱</button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="font-semibold mb-1">已訂閱</h2>
        {feeds.length === 0 ? (
          <p>尚未訂閱任何節目</p>
        ) : (
          <ul>
            {feeds.map(url => (
              <li key={url} className="mb-1">
                {url}
                <button
                  className="ml-2 text-red-600 underline"
                  onClick={() => remove(url)}
                >移除</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default SubscriptionManager
