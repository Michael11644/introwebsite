using UnityEngine;
using UnityEngine.Audio;

public class AudioManager : MonoBehaviour
{
    public AudioMixer mainMixer;

    public void SetVolume(string parameter, float value)
    {
        mainMixer.SetFloat(parameter, value);
    }
}
