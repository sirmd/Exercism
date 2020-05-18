using System;
using System.Collections.Concurrent;
using System.Collections.Generic;

public class CircularBuffer<T>
{
    private int _capacity;
    private ConcurrentQueue<T> buffer { get; }
    public CircularBuffer(int capacity)
    {
        this._capacity = capacity;
        buffer = new ConcurrentQueue<T>();
    }

    public T Read()
    {
        if (buffer.Count == 0) throw new InvalidOperationException();

        T result;
        buffer.TryDequeue(out result);
        return result;
    }

    public void Write(T value)
    {
        if (buffer.Count == _capacity) throw new InvalidOperationException();

        buffer.Enqueue(value);
    }

    public void Overwrite(T value)
    {
        if (buffer.Count < _capacity)
        {
            Write(value);
        }
        else{
            T result;
            buffer.TryDequeue(out result);
            buffer.Enqueue(value);
        }
    }

    public void Clear()
    {
        if (buffer.Count == 0) return;
        buffer.Clear();
    }
}